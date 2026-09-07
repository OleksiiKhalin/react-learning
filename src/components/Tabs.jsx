export default function Tabs({children, buttons, buttonsContainer = 'menu'}) {
    const   = buttonsContainer
    return(
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            <h2>{children}</h2>
        </>
    )
}