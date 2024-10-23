interface IconWrapperProps {
  children: React.ReactNode;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <b className="flex h-full w-full items-center justify-center bg-orange-hot">
    {children}
  </b>
);
