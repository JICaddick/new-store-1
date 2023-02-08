const navigation = [
  { name: "About", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Terms and Conditions", href: "#" },
];

const Footer = () => {
  return (
    <footer className=" bg-yellow-50">
        <div className="px-4 py-2 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8"> 
            <nav className="flex flex-wrap justify-center">
          {navigation.map((item, index) => (
            <div className="px-6" key={index}>
              <a href={item.href} className="text-sm text-yellow-600 sm:text-lg hover:text-yellow-500">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-2 text-sm text-center text-green-700 md:text-lg">
          &copy; Honey Dripper Jewelry Co. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
