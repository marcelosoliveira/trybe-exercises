const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

  console.log(customer);

  customer.lastname = 'Santos';
  console.log(customer);

  const fullname = `${customer.firstName} ${customer.lastname}`;
  let newKey = 'fullname';

  customer[newKey] = fullname;

  console.log(customer);

const name = {};
console.log(name);
 const objectFunciton = (obj, string, value) => obj[string] = value;
objectFunciton(name, 'nome', 'Marcelo');
console.log(name);