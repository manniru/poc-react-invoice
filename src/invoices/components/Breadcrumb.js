// @flow
import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import type { Location } from '../models'

type BreadcrumbLink = {
  text: string,
  to?: string,
  active?: boolean,
}

class Breadcrumb extends Component {
  static defaultProps = {
    location: {
      pathname: ''
    }
  }
  props: {
    location: Location
  }
  render () {
    const { location } = this.props
    const items:Array<BreadcrumbLink> = [{ text: 'Invoices', to: '/', active: true }]
    if (location.pathname !== '/') {
      const action = location.pathname.split('/')[1]
      items.push({ text: `${action} Invoice` })
    }
    items[items.length - 1].active = false

    const getInner = (link) => {
      if (link.active) {
        return (
          <LinkContainer to={link.to} isActive={() => link.active}>
            <a>{link.text}</a>
          </LinkContainer>
        )
      }
      return <span>{link.text}</span>
    }

    return (
      <div>
        <ol className="breadcrumb">
          {items.map((item, idx) => (<li key={idx}>{getInner(item)}</li>))}
        </ol>
      </div>
    )
  }
}

export default Breadcrumb
