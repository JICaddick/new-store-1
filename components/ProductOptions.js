const ProductOptions = ({ name, values, selectedOptions, setOptions }) => {
  return (
    <fieldset className="mt-3">
      <legend className="text-xl text-green-700">{name}</legend>
      <div className="inline-flex flex-wrap items-center">
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;

          return (
            <label key={id} htmlFor={id}>
              <input
                className="sr-only"
                type="radio"
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              <div
                className={`p-2 mt-3 text-lg block cursor-pointer mr-3 font-medium border-2 border-green-700 shadow-green-700 hover:opacity-60 rounded-xl ${
                  checked
                    ?  "bg-green-700 text-white"
                    : "bg-amber-100 text-green-700"
                }`}
              >
                <span className="px-2">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default ProductOptions;