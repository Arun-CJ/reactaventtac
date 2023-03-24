const SampleArrays = () => {
  const sampleArray = [1, 2, 3, 4];
  const sampleArrayOfobject = [
    { name: "Aroha", city: "Bengaluru" },
    { name: "Ibridge", city: "Bengaluru" },
    { name: "Aroha", city: "Chennai" },
    { name: "Accenture", city: "Bengaluru" },
    { name: "MRF", city: "Chennai" },
  ];

  return (
    <div>
      Array values
      {sampleArray.map((item) => (
        <p>{item}</p>
      ))}
      {sampleArrayOfobject.map((ele, idx) => {
        return (
          <>
            <p>Name: {ele.name}</p>
            <p>City:{ele.city}</p>
          </>
        );
      })}
    </div>
  );
};

export default SampleArrays;
