import Container from "../components/container";
import Layout from "../components/layout";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
const TodosView = () => {
  return (
    <Layout>
      <Container>
        <TodoForm />
      </Container>
      <Container>
        <TodoList />
      </Container>
    </Layout>
  );
};

export default TodosView;
