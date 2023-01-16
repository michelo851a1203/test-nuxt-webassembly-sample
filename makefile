wasm-build:
	GOOS=js GOARCH=wasm go build -o simple.wasm ./server/wasm/main.go 
build:
	pnpm build && GOOS=js GOARCH=wasm go build -o ./.output/server/simple.wasm ./server/wasm/main.go 
