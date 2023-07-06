import backgroundImg from "../assets/bg-sidebar-mobile.svg";



function Background() {


  return (
    <article className="bg-magnolia h-screen w-screen mx-auto absolute top-0 bottom-0 right-0 left-0 z-[-1]">
      <div className="mx-auto desktop:hidden">
        <img className="w-full" src={backgroundImg} alt="Mobile Background" />
      </div>
    </article>
  );
}

export default Background;
