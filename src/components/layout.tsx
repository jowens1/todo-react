type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="h-screen flex-col p-4 bg-blue-100">
    {children}
  </div>
);

export default Layout;
