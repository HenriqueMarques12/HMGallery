import * as C from './styles';

type props = {
    url: string;
    name: string;
}

export const PhotoItem = ({ url, name }: props) => {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
        </C.Container>
    );
}