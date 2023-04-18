import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Index() {
  const [sidebar, setSidebar] = useState<boolean>(true);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="dev">
      <div
        className={`${
          sidebar ? "left-0" : "left-[-250px]"
        } left-0 flex transition-all fixed top-0 bottom-0 w-[250px] p-3 dev2`}
      >
        This is a cute sidebar
      </div>

      <div className={`${sidebar && "ml-[250px]"} transition-all  p-3 dev`}>
        <h1>Home</h1>

        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
        </p>

        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div>
    </div>
  );
}
