const styles = {
    sidebarWrapper: {
        background: '#062239',
        minHeight: '100vh',
        color: '#FFFFFF',
        fontFamily: "'Roboto', sans-serif",
        height: 1450
    },
    logoWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        width: 154,
        height: 54,
        marginTop: 30
    },
    profileWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 35
    },
    avatar: {
        borderRadius: '50%',
        width: 115,
        height: 115
    },
    fullName: {
        fontSize: 17,
        marginBottom: 0   
    },
    userId: {
        fontSize: 12,
        marginTop: 3
    },
    linksFlex: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    linkButtonFlex: {
        display: 'flex',
        paddingLeft: 30,
        alignItems: 'center'
    },
    icon: {
        width: 28,
        height: 28
    },
    LinkName: {
        fontSize: 15,
        textTransform: 'uppercase',
        marginLeft: 10,
        fontWeight: '600',
        cursor: 'pointer'
    },
    linksSections:{
        marginTop: 50,
        marginLeft: 0,
        marginRight: 0,
        paddingRight: 0
    },
    activeTab:{
        background: '#043B5C',
        borderLeft: '4px solid white'
    },
     linkButtonFlex2: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 28
    },
    subTabs: {
        paddingBottom: 12,
        fontWeight: '600',
        paddingLeft: 35
    },
    propertyTab: {
        display: 'flex',
        alignItems: 'center'
    }
}

export default styles;