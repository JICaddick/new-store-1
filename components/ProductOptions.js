const ProductOptions = ({ name, values, selectedOptions, setOptions }) => {
  return (
    <fieldset className="mt-3">
      <legend className="text-xl text-yellow-400 drop-shadow-2xl ">{name}</legend>
      <div className="inline-flex flex-wrap items-center hover:opacity-60">
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
                className={`p-2 mt-3 text-lg block cursor-pointer mr-3 bg-yellow-400 shadow-md text-amber-700 rounded-xl shadow-green-700 ${
                  checked
                    ? "bg-yellow-400 text-amber-700 shadow-2xl"
                    : "bg-yellow-400 text-amber-700 shadow-2xl"
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
