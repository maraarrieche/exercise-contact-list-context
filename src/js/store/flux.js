const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: [
				{
					id: 0,
					name: "Carlos D'Lacoste",
					email: "carlos@gmail.com",
					phone: "04125648788",
					address: "Caracas"
				},
				{
					id: 1,
					name: "Mariana Arrieche",
					email: "arrieche.mara@gmail.com",
					phone: "04123756899",
					address: "Caracas"
				},
				{
					id: 2,
					name: "Alexander De Matteo",
					email: "alexander@gmail.com",
					phone: "04127365455",
					address: "Valencia"
				}
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			newContact: newItem => {
				const auxStore = getStore();
				setStore({ contId: auxStore.contId + 1 });
				newItem.id = auxStore.contId;
				setStore({ contactos: [...auxStore.contactos, newItem] });
			},

			deleteContact: targetContact => {
				const store = getStore();
				setStore({ contactos: store.contactos.filter(contacto => contacto.id != targetContact.id) });
			},

			editContact: (targetContact, id) => {
				const store = getStore();
				const auxContact = store.contactos.find(item => item.id == id);
				if (auxContact) {
					auxContact.name = targetContact.name;
					auxContact.email = targetContact.email;
					auxContact.phone = targetContact.phone;
					auxContact.address = targetContact.address;
					setStore({ contactos: store.contactos });
				}
			}
		}
	};
};

export default getState;
