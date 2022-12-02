export const HumanDate = ({ date }: { date: Date; }) => {
    let humanMonth = 'Onbekend';
    switch (date.getMonth()) {
        case 0: { humanMonth = 'januari'; break; }
        case 1: { humanMonth = 'februari'; break; }
        case 2: { humanMonth = 'maart'; break; }
        case 3: { humanMonth = 'april'; break; }
        case 4: { humanMonth = 'mei'; break; }
        case 5: { humanMonth = 'juni'; break; }
        case 6: { humanMonth = 'juli'; break; }
        case 7: { humanMonth = 'augustus'; break; }
        case 8: { humanMonth = 'september'; break; }
        case 9: { humanMonth = 'oktober'; break; }
        case 10: { humanMonth = 'november'; break; }
        case 11: { humanMonth = 'december'; break; }
    }
    return <span>{`${date.getDate()} ${humanMonth}, ${date.getUTCFullYear()}`}</span>;
};
