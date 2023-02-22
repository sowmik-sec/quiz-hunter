import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="p-6">
        <h3 className="text-2xl">What is the purpose of react router?</h3>
        <p>
          {" "}
          React Router is a JavaScript framework that lets us handle client and
          server-side routing in React applications. It enables the creation of
          single-page web or mobile apps that allow navigating without
          refreshing the page. It also allows us to use browser history features
          while preserving the right application view.
        </p>
      </div>
      <div className="p-6">
        <h3 className="text-2xl">How does context API Work?</h3>
        <p>
          1. The Context API helps share data between components which you can’t
          easily share with props, for example, complex data objects.
        </p>
        <p>
          2. React Context API provides a way to send data like userid, auth,
          and theme data through the component tree without sending any props
          manually at every level.
        </p>
        <p>
          3. We can also share specific states with multiple components instead
          through props manually. In some use cases, ideal for theming,
          localization, authentication etc.
        </p>
      </div>
      <div className="p-6">
        <h3 className="text-2xl">What is the purpose of useRef hook</h3>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default Blog;
