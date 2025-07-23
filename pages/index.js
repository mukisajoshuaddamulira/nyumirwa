import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useTodos from '../hooks/useTodos'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'

export default function Home() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos();

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A simple todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Todo App
        </h1>
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      </main>
    </div>
  )
}
