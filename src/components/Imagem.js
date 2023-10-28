function Imagem({background, titulo, numero, minImg, alt}) {
  return (
    <div className={`${background} w-60 h-60 rounded-2xl p-4 flex flex-col justify-around`}>
      <div className="flex text-white font-semibold justify-around w-full h-1/3">
        <div className="w-16 flex justify-start items-center text-6xl mr-3">
          <h2>{numero}</h2>
        </div>
        <div className="w-full h-full flex justify-center items-center text-base font-bold">
          <h2 className="uppercase">{titulo}</h2>
        </div>
      </div>
      <div className="h-2/3 flex items-center justify-center p-4">
        <img className="h-full" src={minImg} alt={alt}/>
      </div>
    </div>
  );
}

export default Imagem;