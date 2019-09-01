import { some } from 'lodash-es'
import { User } from './store/user'

export type Tree<T, TNode> = { [K in keyof T]?: T[K] extends Dictionary<infer X> ? Tree<X, TNode> : TNode }
export type Node<T, TNode> = TNode | Tree<T, TNode>

export type ErrorNode<T = any> = Node<T, string>
export type ErrorTree<T = any> = Tree<T, string>

export type Form<T = any> = {
  model: T
  errors: ErrorTree<T>
}

export function hasError<T>(node: ErrorNode<T>): boolean {
  if (typeof node === 'string') {
    return !!node
  }
  return some(node, hasError)
}

export function hasFormError(form: Form): boolean {
  return hasError(form.errors)
}

type UserForm = Form<User>

const userForm: UserForm = {
  model: {
    id: '1',
    name: 'FooMan'
  },
  errors: {
    name: 'Illegal name'
  }
}
