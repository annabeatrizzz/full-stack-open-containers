import React from 'react'
import { render } from '@testing-library/react'
import List from './List'

describe('Todo component', () => {
  const todo = [{ text: 'Learn React', done: false }]
  const deleteTodo = () => {}
  const completeTodo = () => {}

  test('renders todo text', () => {
    const { container } = render(
      <List todos={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    )

    expect(container.textContent).toContain('Learn React')
    expect(container.textContent).toContain('This todo is not done')
  })
})
