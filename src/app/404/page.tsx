import { NextPage } from "next";
import { NotFoundContent, NotFoundWrapper } from "./components";

const NotFound: NextPage = () => (
  <NotFoundWrapper>
    <NotFoundContent />
  </NotFoundWrapper>
);

export default NotFound;
