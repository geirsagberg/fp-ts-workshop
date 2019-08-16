// Geir viser TypeScript

// Type inference

{
  const llanowarElves = {
    power: 1,
    toughness: 1,
    tap: () => 'greenMana'
  }

  llanowarElves.tap()
}

// Enums

enum Mana {
  Green,
  Black,
  White,
  Red,
  Blue
}

{
  const llanowarElves = {
    power: 1,
    toughness: 1,
    tap: () => Mana.Green
  }
}

// Interfaces

interface Tappable {
  tap: () => any
}

interface Creature {
  power: number
  toughness: number
}

{
  const llanowarElves: Tappable & Creature = {
    power: 1,
    toughness: 1,
    tap: () => Mana.Green
  }
}

// Types

type TappableCreature = Tappable & Creature

const avacynsPilgrim: TappableCreature = {
  power: 1,
  toughness: 1,
  tap: () => Mana.White
}

// So what’s the difference between type alias and interface again 🤖?
// 1. you cannot use implements on an class with type alias if you use union operator within your type definition
// 2. you cannot use extends on an interface with type alias if you use union operator within your type definition
// 3. declaration merging doesn’t work with type alias
// 4. cannot assign typeof and keyof to interfaces

// type => shorter, better syntax for type algebra:
// interface Props extends OwnProps, InjectedProps, StoreProps {}
// type Props = OwnProps & InjectedProps & StoreProps
// always use interface for public API's definition when authoring a library or 3rd party ambient type definitions

// Declaration merging

interface Spell {
  manaCost: Mana[]
}

interface Creature extends Spell {}

// Classes, generics & const assertions

interface ManaTappable<TMana extends Mana> {
  tap: () => TMana
}

class LlanowarElves implements ManaTappable<Mana.Green> {
  tap = () => Mana.Green as const
}

const elf = new LlanowarElves()

const mana = elf.tap()

// Union Types

type PassiveAbility = () => any
interface ActiveAbility {
  (): any
}

interface Enchantment extends Spell {
  ability: PassiveAbility | ActiveAbility
}

type Permanent = Creature | Enchantment

const goblin: Permanent = {
  power: 1,
  ability: () => '',
  toughness: 1,
  manaCost: [Mana.Red]
}

// keyof

type CreatureAttribute = keyof Creature

const attr: CreatureAttribute = 'power'

// index signature

type AnyType = {
  [Prop: string]: any
}

{
  const x: AnyType = {
    d: 3,
    [3]: 6
  }
}

// Mapped type & never

type Not<T> = { [P in keyof T]?: never }

type NotCreature = Not<Creature>

const c: NotCreature = {}

type AnythingButCreature = AnyType & NotCreature

const island: AnythingButCreature = {
  color: 'blue'
}

// Exclude<T,U>

type EnchantmentAttribute = keyof Enchantment

type AttributesInEnchantmentButNotInCreature = Exclude<EnchantmentAttribute, CreatureAttribute>

const enchantmentAttr: AttributesInEnchantmentButNotInCreature = 'ability'

// Exclusive OR

type CreatureXorEnchantment =
  | Creature & { [P in AttributesInEnchantmentButNotInCreature]?: never }
  | Enchantment & { [P in Exclude<keyof Creature, keyof Enchantment>]?: never }

const orc: CreatureXorEnchantment = {
  power: 2,
  toughness: 2,
  manaCost: [Mana.Red, Mana.Red],
  ability: () => ''
}

// Pick<T, U>

type CreaturePower = Pick<Creature, 'power'>

const p: CreaturePower = {
  power: 5
}

// Omit<T, U>

type CreatureWithoutManaCost = Omit<Creature, 'manaCost'>

const freeCreature: CreatureWithoutManaCost = {
  power: 3,
  toughness: 3
}

// typeof

const pacifism = {
  type: 'enchantment',
  manaCost: [Mana.White]
}

type InferredEnchantment = typeof pacifism

// string literals

type CardType = 'creature' | 'sorcery' | 'instant' | 'enchantment' | 'land'

// ReturnType<T>

function castCounterspell() {
  const type: CardType = 'instant'
  return {
    type,
    manaCost: [Mana.Blue, Mana.Blue]
  }
}

type Counterspell = ReturnType<typeof castCounterspell>
