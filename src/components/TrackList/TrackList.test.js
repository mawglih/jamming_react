const TrackList = require("./TrackList")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new TrackList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
