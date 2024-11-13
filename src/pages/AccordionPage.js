import Accordion from "../components/Accordion";

function AccordionPage(){

    const items = [
        {
            id: 'akjsdh',
            label: 'Click here',
            content: 'Here is more info'
        },
        {
            id: 'akjsdh4',
            label: 'Click here 2',
            content: 'Here is more info'
        },
        {
            id: 'akjsdhs',
            label: 'Click here 3',
            content: 'Here is more info'
        },
    ]

    return <Accordion items={items} />
}

export default AccordionPage;
