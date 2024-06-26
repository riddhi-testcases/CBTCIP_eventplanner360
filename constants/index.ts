export const headerLinks = [
    {
      label: 'Dashboard',
      route: '/',
    },
    {
      label: 'Plan Event',
      route: '/events/create',
    },
    {
      label: 'My Account',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }