import supabase from './supabase';

export async function getfinance() {
  const { data, error } = await supabase.from('financeData').select('*');

  if (error) {
    console.error(error);
    throw new Error('Data not found');
  }

  return data;
}

export async function addFinance(newEntry) {
  const { data, error } = await supabase
    .from('financeData')
    .insert([newEntry.data])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Data not found');
  }

  return data;
}

export async function editFinance(editEntry) {
  debugger;
  const { data, error } = await supabase
    .from('financeData')
    .update([editEntry.data])
    .eq('id', editEntry.data.id)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Data not found');
  }

  return data;
}
