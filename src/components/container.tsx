type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => (
  <div className="flex pb-4 items-center justify-center">{children}</div>
);

export default Container;
