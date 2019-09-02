// Geir viser TypeScript

// Type inference

// Enums

enum Mana {
  Green,
  Black,
  White,
  Red,
  Blue
}

const llanowarElves: Tappable & Creature = {
  power: 1,
  toughness: 1,
  tap: () => 'greenMana',
  manaCost: [Mana.Green]
}

// Interfaces

interface Tappable {
  tap: () => any
}

interface Creature {
  power: number
  toughness: number
}

// Types

type TappableCreature = Tappable & Creature

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
  isTapped = false
  tap = () => {
    this.isTapped = true
    return Mana.Green as const
  }
  canTap = () => !this.isTapped
}

const elf = new LlanowarElves()

elf.tap()

// InstanceType

type LlanowarElvesType = InstanceType<typeof LlanowarElves>

// Union Types

type PassiveAbility = () => any
interface ActiveAbility {
  (): any
}

interface Enchantment extends Spell {
  ability: PassiveAbility | ActiveAbility
}

const e: Enchantment = {
  ability: () => '',
  manaCost: [Mana.Green]
}

// keyof

type CreatureAttribute = keyof Creature

// index signature

type AnyType = {
  [Prop: string]: any
}

// Mapped type & never

type Not<T> = {
  [P in keyof T]?: never
}

type NotCreature = Not<Creature>

type AnythingButCreature = AnyType & NotCreature

const c: AnythingButCreature = {
  lol: 3,
  foo: 'm'
}

// Exclude<T,U>

type EnchantmentAttribute = keyof Enchantment

type AttributesInEnchantmentButNotInCreature = Exclude<EnchantmentAttribute, CreatureAttribute>

// Extract<T,U>

type AttributesInEnchantmentAndInCreature = Extract<EnchantmentAttribute, CreatureAttribute>

// Exclusive OR

// Pick<T, U>

type CreaturePower = Pick<Creature, 'power'>

// Omit<T, U>

type CreatureWithoutManaCost = Omit<Creature, 'manaCost'>

const centaurToken: CreatureWithoutManaCost = {
  power: 3,
  toughness: 4
}

// typeof

const pacifism = {
  type: 'enchantment' as const,
  manaCost: [Mana.White]
}

type InferredEnchantment = typeof pacifism

// string literals

type CardType = 'creature' | 'sorcery' | 'instant' | 'enchantment' | 'land'

// ReturnType<T>

function castCounterspell() {
  return {
    type: 'instant' as const,
    manaCost: [Mana.Blue, Mana.Blue] as const,
    wat: {
      m: 32
    } as const
  }
}

type Counterspell = ReturnType<typeof castCounterspell>

// Conditional types

type TypeOfCard<T> = T extends { type: 'land' }
  ? 'land'
  : T extends { type: 'instant' }
  ? 'instant'
  : T extends { type: 'creature' }
  ? 'creature'
  : T extends { type: 'sorcery' }
  ? 'sorcery'
  : T extends { type: 'enchantment' }
  ? 'enchantment'
  : never

type CounterspellType = TypeOfCard<Counterspell>

// infer

type InferredTypeOfCard<T> = T extends { type: infer R } ? (R extends CardType ? R : never) : never

type InferredCounterspell = InferredTypeOfCard<Counterspell>
