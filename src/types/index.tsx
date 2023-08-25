import type { Setter, Accessor } from 'solid-js'

export type BooleanState = {
    set: Setter<boolean>
    get: Accessor<boolean>
}
