import { server } from "./server.js";

const port = 1337;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
