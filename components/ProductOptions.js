const ProductOptions = ({ name, values, selectedOptions, setOptions }) => {
  return (
    <fieldset className="mt-3">
      <legend className="text-xl text-green-700 drop-shadow-2xl">{name}</legend>
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
                className={`p-2 mt-3 text-lg block cursor-pointer mr-3 bg-yellow-50 shadow-md text-amber-500 rounded-xl font-medium ${
                  checked
                    ? "shadow-green-700 border-sm hover:opacity-60"
                    : "shadow-green-700 border-sm hover:opacity-60"
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
