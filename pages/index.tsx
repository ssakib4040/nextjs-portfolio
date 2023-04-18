import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function Index() {
  const [sidebar, setSidebar] = useState<boolean>(true);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    // set sidebar false if window is less then 768px
    if (window.innerWidth < 768) {
      setSidebar(false);
    }
  }, []);

  return (
    <div className="dev">
      <Sidebar sidebar={sidebar} />

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
