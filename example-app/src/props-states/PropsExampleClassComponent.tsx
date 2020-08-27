import React from 'react';

type TextProps = {
    color?: string | 'black',
    style?: React.CSSProperties,
}

interface IState {
    isClicked: boolean,
}


export class Text extends React.Component<TextProps, IState> {

        constructor(props: TextProps){
            super(props);
            this.state = {
                isClicked: false,
            }
        }
        
        
        render(){
            return(
                <p style={{color: this.props.color, ...this.props.style}}
                   onClick={()=>{
                       this.setState({isClicked: true});
                       setTimeout(()=>{
                             alert('Clicked on text '+ this.state.isClicked);
                       },100)
                   }}
                >
                    {this.props.children}
                </p>
            );
        }
}