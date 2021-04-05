module Example

open ElmishStore

type Msg =
  | Greet of name: string

type State = {Name: string}

let init hub =
  {Name = "World"}, Cmd.none

let update msg state =
  match msg with
  | Greet name -> {state with Name = name}, Cmd.none

[<SveltePlugins.GenerateDeclaration>]
let makeStore () =
  let store, dispatch = SvelteStore.makeElmish init update ignore ()
  store, SvelteStore.makeDispatcher dispatch

