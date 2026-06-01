const StudentCard = ({ name, age, removeStudent,updateStudent, id }) => {
    return (
  <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition">

    <div className="flex items-center gap-4">

      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl">
        {name[0]}
      </div>

      <div>
        <h2 className="font-bold text-lg">
          {name}
        </h2>

        <span className="bg-gray-200 px-2 py-1 rounded text-sm">
          Age: {age}
        </span>
      </div>

    </div>

    <div className="flex gap-2 mt-4">

      <button
        onClick={() => updateStudent(id)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Update
      </button>

      <button
        onClick={() => removeStudent(id)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Delete
      </button>

    </div>

  </div>
);

};

export default StudentCard;