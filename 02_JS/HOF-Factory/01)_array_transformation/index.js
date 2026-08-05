const projectName = "DATA TRANSFORM ENGINE";
console.log("======================================");
console.log(`Project Name : ${projectName}`);
console.log("======================================");

const users = [
  { id: 1, name: "Aman", age: 22, active: true, salary: 30000, city: "Delhi", skills: ["js", "react"] },
  { id: 2, name: "Sara", age: 28, active: false, salary: 50000, city: "Mumbai", skills: ["python", "ml"] },
  { id: 3, name: "John", age: 35, active: true, salary: 70000, city: "Delhi", skills: ["java", "spring"] },
  { id: 4, name: "Riya", age: 24, active: true, salary: 40000, city: "Pune", skills: ["js", "node"] },
  { id: 5, name: "Alex", age: 30, active: false, salary: 60000, city: "Mumbai", skills: ["go", "docker"] },
];

// Shallow Copy (Deep copy ke liye: structuredClone(users))
const data = [...users];

// 🟢 LEVEL 1 (Basic Transformation) [1–10]

// 1. Sirf names ka array nikalo
const getUsersName = arr => {
    return arr.map(u => u.name);
};
console.log('users name: ', getUsersName(data));


// 2. Active users filter karo
const getActiveUsers = arr => {
    if (!arr || !Array.isArray(arr) || arr.length === 0) return [];
    const activeUsers = arr.filter(u => u.active);
    return activeUsers.length > 0 ? activeUsers : [];
};
console.log('ACTIVE USERS LIST: ');
console.table(getActiveUsers(data));


// 3. Sab users ki salary +10% increase karo
// Method 1: Explicit return
const increaseSalaryExplicit = data => {
    return data.map(u => {
        return {
            ...u,
            salary: Math.round(u.salary * 1.10)
        };
    });
};
console.log('Increase all users salary (explicit return) : ', increaseSalaryExplicit(data));

// Method 2: Implicit return
const increaseSalaryImplicit = data => data.map(u => ({ ...u, salary: Math.round(u.salary * 1.10) }));


// 4. Cities ka unique list banao
// Method 1: Using Reduce
const getUniqueCityList = arr => {
    return arr.reduce((acc, curr) => {
        let c = curr.city;
        if (!acc.includes(c)) {
            acc.push(c);
        } 
        return acc;
    }, []);
};
console.log('unique cities (reduce) : ', getUniqueCityList(data));

// Method 2: Modern approach (Set + Map)
const uniqueCities = arr => [...new Set(arr.map(u => u.city))];
console.log('unique cities list (Set) :', uniqueCities(data));


// 5. Har user ka name uppercase karo
const transformUsersName = arr => arr.map(u => u.name.toUpperCase());
console.log('Transform users name in uppercase :', transformUsersName(data));


// 6. Sirf age ka array banao
const getUsersAge = arr => arr.map(u => u.age);
console.log('Users age list : ', getUsersAge(data));


// 7. Active users ke names nikalo
// Method 1: Method Chaining (filter + map)
const getActiveUsersName = arr => {
    return arr.filter(u => u.active).map(u => u.name);
};
console.log('active users name (filter + map) :', getActiveUsersName(data));

// Method 2: Single pass with reduce
function activeUsersNames(arr) {
    return arr.reduce((acc, curr) => {
        let u = curr.active;
        if (u) {
            acc.push(curr.name);
        }
        return acc;
    }, []);
}
console.log('active users name (reduce) :', activeUsersNames(data));


// 8. Sab skills ko ek single array me flatten karo
const flattenSkills = arr => arr.flatMap(u => u.skills);
console.log('flatten skills :', flattenSkills(data));


// 9. Har user ka "name - city" format banao
const formatUsers = arr => arr.map(u => `name : ${u.name} : city : ${u.city}`);
console.log('format users :', formatUsers(data));


// 10. Check karo koi user inactive hai ya nahi
const isInactiveUser = arr => arr.some(u => !u.active);
console.log('has inactive user :', isInactiveUser(data));
