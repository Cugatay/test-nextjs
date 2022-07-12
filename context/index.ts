import create from 'zustand'

const useStore = create((set) => ({
  account: null,
  getAccount: async () => {
      let provider = (window as any).ethereum;

      try {
        if(typeof provider !== 'undefined') {
          const accounts = await provider.request({method: 'eth_requestAccounts'});
          if(accounts[0]) {
            set((state: any) => ({account: accounts[0]}));

            (window as any).ethereum.on('accountsChanged', (newAccounts: string[]) => {
              set((state: any) => ({account: newAccounts[0]}));
              console.log('accounts changed')
            })
          }
          else {
            throw new Error('You must have a wallet account');
          }
        } else {
          throw new Error('You have to add a wallet extension to Chrome');
        }
      } catch(err) {
        console.log(err)
      }

  },
  // increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}))

export default useStore;