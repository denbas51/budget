import React from "react"
import Transaction from "."
import { shallow } from "enzyme"

describe("Transaction component", () => {
  it("should show transaction", () => {
    const props = {
      transaction: {
        value: 23,
        comment: "Test",
        date: "25.06.2022",
      },
    }
    const sut = shallow(<Transaction {...props} />)
    expect(sut).toMatchSnapshot()
  })
})
