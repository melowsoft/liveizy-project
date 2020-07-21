const styles = {
    filterFlex: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 40,

    },
   
    table: {
        display: 'flex',
        flexFlow: 'column nowrap',
        boxPack: 'justify',
        justifyContent: 'space-between',
        width: '100%',
        color: '#043B5C',
        textTransform: 'uppercase',
        marginTop: 50
    },
tableHeader: {
 display: 'flex',
 flexFlow: 'row nowrap',
  alignItems: 'center',
  background: 'white',
  borderRadius: '15px 15px 0px 0px',
  boxShadow: '0px 3px 6px #EFF5FF',
  padding: '20px 30px',
  height: '40px',
  marginBottom: 6
},
tableBody: {
 display: 'flex',
 flexFlow: 'row nowrap',
  alignItems: 'center',
  background: 'white',
  borderRadius: '10px',
  boxShadow: '0px 3px 6px #EFF5FF',
  padding: '20px 30px',
  height: '40px',
  marginBottom: 6
},
    headerItem: {
         flex: '1',
         fontSize: 13
    },
    headerItem2: {
         flex: '2',
         fontSize: 13
    },
    bodyItem: {
         flex: '1',
         fontSize: 13
    },
    bodyItem2: {
         flex: '2',
         fontSize: 13
    },
    maintenance: {
        display: 'flex',
        alignItems: 'center'
    },
    actionFlex: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 15
    },
    button: {
        background: '#4786FF',
        color: '#FFFFFF',
        borderRadius: 5,
        border: 'none',
        width: 180,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    plus: {
        fontSize: 20,
        marginRight: 5
    },
    tableFilter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350,
        background: '#FFFFFF',
        borderRadius: 10,
        boxShadow: '0px 3px 6px #E8F0FF',
        padding: '5px 10px'
    },
    filterButton: {  
        padding: 5,
        height: 25,
        borderRadius: 5,
        minWidth: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    activeFilter: {
        background: '#6EB5DF72',
    }
}

export default styles;