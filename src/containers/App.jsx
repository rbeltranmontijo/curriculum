import React from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Info from "../components/Info";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experiencie";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import useGetData from "../hooks/useGetData";

const App = () => {
  const data = useGetData();
  console.log(data);
  return (
    <Main>
      <Sidebar>
        <About 
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          bio
        />
      </Sidebar>

      <Info>
        <Education />
        <Experience />
        <Certificates />
        <Skills />
      </Info>
    </Main>
  );
};

export default App;
