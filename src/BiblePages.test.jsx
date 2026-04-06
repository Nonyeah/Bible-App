import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import  BiblePages  from './App'
import {BottomBar} from './App'
import '@testing-library/jest-dom';

describe('BiblePages', () => {
  it('renders bible book name', () => {
    render(<BiblePages />)
    expect(screen.getByText('genesis')).toBeInTheDocument()
  })


  it('renders bible chapter', () => {
    render (<BiblePages />)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('renders bottom navigation', async() => {
    render(<BiblePages />)
    expect(await screen.findByText('Home')).toBeInTheDocument();
  })

  it('renders bottom navigation', () => {
    render(<BiblePages />)
    expect(screen.getByText('Plans')).toBeInTheDocument();
  })

    it('renders bottom navigation', () => {
    render(<BiblePages />)
    expect(screen.getByText('Home')).toBeInTheDocument();
  })

    it('renders bottom navigation', () => {
    render(<BiblePages />)
    expect(screen.getByText('Discover')).toBeInTheDocument();
  })

    it('renders bottom navigation', () => {
    render(<BiblePages />)
    expect(screen.getByText('More')).toBeInTheDocument();
  })
})