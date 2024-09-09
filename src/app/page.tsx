import axios from "axios";

async function getUserDetails() {
  //settimeout by using promise

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen bg-gray-100">
      <div className="flex justify-center">
        <div className="border p-8 rounded bg-white shadow-lg">
          <div className="text-xl font-bold text-blue-600">
            Name: {userData?.username}
          </div>
          <div className="text-lg text-gray-700">{userData?.email}</div>
        </div>
      </div>
    </div>
  );
}
