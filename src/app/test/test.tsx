import { Button, Card, Container, Grid } from "semantic-ui-react";
import Image from "next/image";

export default function Example({tasks}) {

// Render a list of tasks
  return (
    <div className=" mx-auto grid grid-cols-5 drop-shadow-lg max-sm:grid-cols-2 ">
                        {tasks.map((tasks, index) => (
                            <div key={tasks._id} className="group relative">
                                <div className="flex flex-col bg-white m-2 hover:shadow-2xl hover:shadow-black/20 duration-300">
                                    <div className="flex h-full">
                                        <Image key={index}
                                            src={`/images/${products.imageSrc}`}
                                            alt={products.imageAlt} className="w-full h-52"
                                            width={200} height={0} />
                                    </div>
                                    <div className="m-3">
                                        <a href={tasks.user} className="line-clamp-1">
                                            <span aria-hidden="true" className="absolute" />
                                            {tasks.name}
                                        </a>
                                        <p className="mt-1 text-sm text-gray-500">{products.user}</p>
                                        <p className="text-sm font-medium text-gray-900">{products.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/tasks');
  const tasks = await res.json()
  
  return{
    props: {
      tasks,
    }
  }
}