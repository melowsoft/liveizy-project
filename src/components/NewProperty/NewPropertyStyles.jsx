const styles = {
    mainWrapper: {
        background: '#FFFFFF',
        borderRadius: '10px',
        width: '100%',
        minHeight: '50vh'
    },
    header: {
        height: 100,
        background: '#6EB5DF72',
        borderRadius: '10px 10px 0px 0px',
        paddingLeft: '8%',
        paddingTop: '2px'
    },
    pageTitle: {
        fontSize: 17,
        color: '#043B5C'
    },
    iconAnchor: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    iconCircle:{
        width: 80,
        height: 80,
        borderRadius: '50%',
        border: '2px solid #043B5C7F',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFFFFF',
        marginBottom: 20
    },
    iconImg : {
        width: 38
    },
    content: {
        width: '100%',
        position: 'relative',
        color: '#043B5C'
    },
    relative: {
        position: 'absolute',
        width: '100%',
        top: -40
    },
    anchorItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    propertyContainer: {
        paddingTop: 150,
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '5%'
    },
    coverImageFrame: {
        width: 300,
        height: 237,
        borderRadius: 5
    },
    imageArea: {
        height: 180,
        background: '#6EB5DF72',
        borderRadius: '10px 10px 0px 0px'
    },
    addCover: {
        height: 57,
        background: '#F4F5F7',
        borderRadius: '0px 0px 10px 10px',
        color: '#043B5C',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    createProperty: {
        textTransform: 'uppercase',
        fontSize: '20px',
        fontWeight: '600',
        color: '#043B5C'
    },
    formSection: {
        padding: '5%'
    },
    selectFrequency: {
        width: '100%',
        height: 44,
        border: '1px solid #043B5C69',
        borderRadius: '10px',
        paddingLeft: 5,
        paddingRight: 5
    },
    input: {
        width: '100%',
        height: 44,
         border: '1px solid #043B5C69',
         borderRadius: '10px',
         paddingLeft: 5,
         paddingRight: 5,
         fontSize: 15,
         fontWeight: '500'
    },
    formItem: {
        marginBottom: 20
    },
    scheduleDate: {
        width: 230,
        height: 145,
        border: '1px solid #043B5C7F'
    },
    scheduleDateWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scheduleTitle: {
        width: '100%',
        background: '#6EB5DF6B',
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: "5%"
    },
    back: {
        border: '1px solid #043B5C',
        borderRadius: '10px',
        background: '#FFFFFF',
        width: 150,
        height: 40,
        cursor: 'pointer'
    },
    next: {
        borderRadius: '10px',
        background: '#4786FF',
        width: 150,
        border: 'none',
        height: 40,
        color: 'white',
        cursor: 'pointer'
    }
}

export default styles