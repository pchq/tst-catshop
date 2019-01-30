import React, { Component } from 'react';

import './product.scss';

export default class Product extends Component{
    
    state = {
        onHover: false,
        status: this.props.data.disabled ? 'disabled' : 'default'
    };
    
    onItemHover = () => {
        if (this.state.status === 'disabled') 
            return;
        this.setState({
            onHover: true
        });
    };
    
    onItemNoHover = () => {
        if (this.state.status === 'disabled') 
            return;
        this.setState({
            onHover: false
        });
    };

    onItemClick = (evt) => {
        evt.preventDefault();
        if (this.state.status === 'disabled')
            return;
        this.setState(({status})=>{
            return {
                onHover: false,
                status: status === 'default' ? 'selected' : 'default'
            }
        });
    };
    
    render(){

        const {filling, note, weight, description} = this.props.data;
        const {status, onHover} = this.state;
        let clazz = 'product';
                
        switch (status){
            case 'disabled':
                clazz += ' is-disabled';
                break;
            case 'selected':
                clazz += ' is-selected';
                break;
            default:
                clazz += ' is-default';
                break;
        }
                
        if(onHover){
            clazz += ' is-hovered';
        }
        
        const upheading = status === 'selected' && onHover ? 'Котэ не одобряет?' : 'Сказочное заморское яство';
        
        const footerDescr = {
            // eslint-disable-next-line 
            default: <span>Чего сидишь? Порадуй котэ, <a href="#" onClick={this.onItemClick} title="купи">купи</a>.</span>,
            selected: <span>{description}</span>,
            disabled: <span className="is-marked">Печалька, {filling} закончился.</span>
        };
        
        
        return (
            <div className={clazz}>
                <div className="product__card" onMouseEnter={this.onItemHover} onMouseLeave={this.onItemNoHover} onClick={this.onItemClick}>
                    <div className="product__inner">
                        <div className="product__upheading">{upheading}</div>
                        <h3 className="product__heading">Нямушка</h3>
                        <div className="product__filling">{filling}</div>
                        <div className="product__note">{note}</div>
                        <div className="product__size">
                            <span className="product__size-num">{weight}</span>
                            <span className="product__size-kg">кг</span>
                        </div>
                    </div>
                </div>
                <div className="product__description">{footerDescr[status]}</div>
            </div>
        )
    }
}
