import Container from "../components/container";
import Layout from "../components/layout";
import TodoForm from "../components/todoForm";
const TodosView = () => {
  return (
    <Layout>
      <Container>
        <TodoForm />
      </Container>
    </Layout>
  );
};

export default TodosView;
