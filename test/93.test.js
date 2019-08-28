import restoreIpAddresses from '../code/93.restore-ip-addresses'

test('93.restore-ip-addresses:1', () => {
  expect(restoreIpAddresses('25525511135')).toEqual(["255.255.11.135", "255.255.111.35"])
})

test('93.restore-ip-addresses:2', () => {
  expect(restoreIpAddresses('010010')).toEqual(["0.10.0.10", "0.100.1.0"])
})
