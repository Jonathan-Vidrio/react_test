import Button from "./components/button.jsx";

function App() {

  return (
    <>
      <div className="bg-quinary h-screen">
          <div className="container mx-auto">
              <div className="flex flex-col justify-center items-center h-screen">
                  <h1 className="text-5xl font-bold text-gray-800">Hello World!</h1>
                  <p className="text-xl text-gray-600">This is a React App</p>
                  <Button>
                        Click me!
                  </Button>
              </div>
          </div>
      </div>
    </>
  );

}

export default App;