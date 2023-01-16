export const useBasic = () => {
  const initializeWebAssembly = async (initializeGo: () => void) => {
    initializeGo();
    const go = new Go();
    const wasmData = await getWasmFile();
    if (wasmData === null) return;
    const result =  await WebAssembly.instantiateStreaming(fetch('/api/wasmFile'), go.importObject);
    await go.run(result.instance);
  }

  const getWasmFile = async () => {
    const { data } = await useFetch('/api/wasmFile', {
      method: 'GET',
    })
    return data.value
  }

  const getWasmFileInformation = async () => {
    const result = await getWasmFile()
    console.log(result);
  }

  return {
    initializeWebAssembly,
    getWasmFileInformation,
    getWasmFile,
  }
}
