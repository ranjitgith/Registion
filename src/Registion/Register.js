// import React, { useState } from "react";

// const Register = () => {
//   const [data, setData] = useState({});

// const handleUser = (e) => {
//   const { value, name, type, checked } = e.target;
//   if(type=='checkbox'){
//     var checkedValues = data['Hobbies'] ? data['Hobbies'].split(','):[]
//     if(checked){
//         checkedValues.push(value)['cric','ft', 'kho-kho', 'chess']
//     }else {
//         checkedValues.splice(checkedValues.indexOf(value), 1)
//     }
//     setData(...data, {'hobbies': checkedValues.join()})
//   }
//   console.log(name, value);
//   setData({ ...data, [name]: value });
  
// };

// const handleSubmit = () => {
//   console.log(data);
// }
//   return 
//     <>
//       <h1>Register</h1>
//       <div className="App">
//         <p>
//           <h3>Registion Start</h3>
//           <br />
//           <b>UserId:</b>
//           <input
//             type="text"
//             name="uid"
//             placeholder=" Enter UserId"
//             onChange={handleUser}
//           />
//         </p>

//         <p>
//           <b>password:</b>
//           <input
//             type="password"
//             name="pwd"
//             placeholder="Enter Password"
//             onChange={handleUser}
//           />
//         </p>
//         <label>
//           <b>Gender:</b>
//           <input type="radio" value='male' name="gender"  onChange={handleUser}/>
//           Male
//           <input type="radio" value='female' name="gender"  onChange={handleUser}/>
//           Female
//           <input type="radio" value='other' name="gender" onChange={handleUser} /> Other
//         </label>
//         <label>
//           <p>
//             <b onChange={handleUser}>Hobbies:</b>
//             <input type="checkbox" name="cric" value='cric' onChange={handleUser} />
//             Cricket
//             <input type="checkbox" name="ft" value='ft' onChange={handleUser} />
//             Football
//             <input type="checkbox" name="kh" value='kho-kho' onChange={handleUser}/>
//             Kho-Kho
//             <input type="checkbox" name="chesss" value='chess' onChange={handleUser} />
//             Chess
//           </p>
//         </label>
//         <label>
//           <b>Country:</b>
//           <select name="cnty" onChange={handleUser}>
//             <option>Select</option>
//             <option>India</option>
//             <option>China</option>
//             <option>London</option>
//             <option>Pakistan</option>
//           </select>
//         </label>
//         <p>
//           <b>Adress:</b>
//           <textarea name="adress" onChange={handleUser}></textarea>
//         </p>

//         <button onClick={handleSubmit}>Register</button>
//       </div>
//     </>
// //   );
// };

// export default Register;

import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({});

  const handleUser = (e) => {
    const { value, name, type, checked } = e.target;
    if (type === "checkbox") {
      var checkedValues = data["Hobbies"] ? data["Hobbies"].split(",") : [];
      if (checked) {
        checkedValues.push(value);
      } else {
        checkedValues.splice(checkedValues.indexOf(value), 1);
      }
      setData({ ...data, "Hobbies": checkedValues.join(",") });
    } else {
      setData({ ...data, [name]: value });
      console.log({ ...data, [name]: value })
    }
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <>
      <h1>Register</h1>
      <div className="App">
        <p>
          <h3>Registration Start</h3>
          <br />
          <b>UserId:</b>
          <input
            type="text"
            name="uid"
            placeholder=" Enter UserId"
            onChange={handleUser}
          />
        </p>

        <p>
          <b>Password:</b>
          <input
            type="password"
            name="pwd"
            placeholder="Enter Password"
            onChange={handleUser}
          />
        </p>
        <label>
          <b>Gender:</b>
          <input type="radio" value="male" name="gender" onChange={handleUser} />
          Male
          <input type="radio" value="female" name="gender" onChange={handleUser} />
          Female
          <input type="radio" value="other" name="gender" onChange={handleUser} /> Other
        </label>
        <label>
          <p>
            <b>Hobbies:</b>
            <input type="checkbox" name="cric" value="cric" onChange={handleUser} />
            Cricket
            <input type="checkbox" name="ft" value="ft" onChange={handleUser} />
            Football
            <input type="checkbox" name="kh" value="kho-kho" onChange={handleUser} />
            Kho-Kho
            <input type="checkbox" name="chesss" value="chess" onChange={handleUser} />
            Chess
          </p>
        </label>
        <label>
          <b>Country:</b>
          <select name="cnty" onChange={handleUser}>
            <option>Select</option>
            <option>India</option>
            <option>China</option>
            <option>London</option>
            <option>Pakistan</option>
          </select>
        </label>
        <p>
          <b>Address:</b>
          <textarea name="address" onChange={handleUser}></textarea>
        </p>

        <button onClick={handleSubmit}>Register</button>
      </div>
    </>
  );
};

export default Register;

