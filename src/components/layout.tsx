type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="flex h-screen flex-col items-center pt-4 bg-blue-100">
    {children}
  </div>
);

export default Layout;
